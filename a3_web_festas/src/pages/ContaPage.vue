<template>
  <q-page padding class="row justify-center items-center" style="height: 100vh; background: linear-gradient(135deg, #667eea, #764ba2);">
    <q-card class="col-xs-11 col-sm-8 col-md-5 col-4 q-pa-xl" flat bordered>
      
      <!-- Mensagem de feedback ao usuário -->
      <q-banner v-if="feedbackMessage" :class="{'bg-positive text-white': isSuccess, 'bg-negative text-white': !isSuccess}" dense class="q-mt-md">
        {{ feedbackMessage }}
      </q-banner>

      <!-- Formulários de login e cadastro -->
      <div v-if="!isLoggedIn || !isSessionChecked">
        <q-tabs
          v-model="activeTab"
          dense
          class="text-primary"
          active-color="primary"
          indicator-color="primary"
        >
          <q-tab name="login" label="Login" icon="login" /> 
          <q-tab name="register" label="Cadastro" icon="person_add" />
        </q-tabs>

        <q-separator />

        <!-- Formulário de Login -->
        <div v-show="activeTab === 'login'">
          <q-form @submit.prevent="processLogin" ref="loginForm" class="q-gutter-md">
            <q-input
              filled
              label="Usuário"
              v-model="loginUsername"
              :rules="[ val => !!val || 'Usuário é obrigatório' ]"
              lazy-rules
              autofocus
            />
            <q-input
              filled
              type="password"
              label="Senha"
              v-model="loginPassword"
              :rules="[ val => !!val || 'Senha é obrigatória' ]"
              lazy-rules
            />
            <q-btn type="submit" color="primary" label="Entrar" unelevated class="full-width" />
          </q-form>
        </div>

        <!-- Formulário de Cadastro -->
        <div v-show="activeTab === 'register'">
          <q-form @submit.prevent="processRegistration" ref="registerForm" class="q-gutter-md">
            <q-input
              filled
              label="Usuário"
              v-model="registerUsername"
              :rules="[ val => !!val || 'Usuário é obrigatório' ]"
              lazy-rules
              autofocus
            />
            <q-input
              filled
              type="password"
              label="Senha"
              v-model="registerPassword"
              :rules="[ val => !!val || 'Senha é obrigatória' ]"
              lazy-rules
            />
            <q-btn type="submit" color="secondary" label="Cadastrar" unelevated class="full-width" />
          </q-form>
        </div>
      </div>

      <!-- Informações do usuário logado e botão de logout -->
      <div v-if="isLoggedIn && isSessionChecked" class="q-mt-xl q-pa-md bg-grey-2 text-center rounded-borders">
        <div class="text-h6 q-mb-md">Usuário: {{ currentUsername }}</div>
        <q-btn color="negative" label="Logout" @click="processLogout" unelevated />
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Variáveis reativas para controle de estado
const activeTab = ref('login')
const loginUsername = ref('')
const loginPassword = ref('')
const registerUsername = ref('')
const registerPassword = ref('')

const feedbackMessage = ref('')
const isSuccess = ref(false)

const loginForm = ref(null)
const registerForm = ref(null)

const isLoggedIn = ref(false)
const currentUsername = ref('')
const isSessionChecked = ref(false)

// Funções para manipulação de usuários e sessão
function getUsers() {
  const data = localStorage.getItem('users')
  return data ? JSON.parse(data) : {}
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users))
}

function saveSession(user) {
  localStorage.setItem('sessionUser ', user)
}

function getSession() {
  return localStorage.getItem('sessionUser ') || ''
}

function clearSession() {
  localStorage.removeItem('sessionUser ')
}

// Função para processar o cadastro de um novo usuário
function processRegistration() {
  if (!registerForm.value.validate()) {
    feedbackMessage.value = ''
    return
  }

  let users = getUsers()
  if (users[registerUsername.value]) {
    feedbackMessage.value = 'Usuário já existe!'
    isSuccess.value = false
    return
  }

  users[registerUsername.value] = registerPassword.value
  saveUsers(users)

  feedbackMessage.value = 'Cadastro realizado com sucesso! Agora faça login.'
  isSuccess.value = true
  registerUsername.value = ''
  registerPassword.value = ''
  activeTab.value = 'login'
}

// Função para processar o login do usuário
function processLogin() {
  if (!loginForm.value.validate()) {
    feedbackMessage.value = ''
    return
  }

  const users = getUsers()
  if (!users[loginUsername.value]) {
    feedbackMessage.value = 'Usuário não encontrado!'
    isSuccess.value = false
    return
  }

  if (users[loginUsername.value] !== loginPassword.value) {
    feedbackMessage.value = 'Senha incorreta!'
    isSuccess.value = false
    return
  }

  feedbackMessage.value = 'Login efetuado com sucesso! Bem-vindo, ' + loginUsername.value
  isSuccess.value = true
  isLoggedIn.value = true
  currentUsername.value = loginUsername.value
  saveSession(loginUsername.value)

  // Limpar campos de login
  loginUsername.value = ''
  loginPassword.value = ''

  // Redirecionar para a página do carrinho
  router.push('/Carrinho')
}

// Função para processar o logout do usuário
function processLogout() {
  isLoggedIn.value = false
  currentUsername.value = ''
  clearSession()
  feedbackMessage.value = 'Você saiu da conta.'
  isSuccess.value = true
  activeTab.value = 'login'
}

// Restaurar sessão se existir
const sessionUser  = getSession()
if (sessionUser ) {
  isLoggedIn.value = true
  currentUsername.value = sessionUser 
  feedbackMessage.value = 'Sessão restaurada. Bem-vindo, ' + sessionUser 
  isSuccess.value = true
}
isSessionChecked.value = true

// Limpar mensagem e campos ao trocar de aba
watch(activeTab, () => {
  feedbackMessage.value = ''
  isSuccess.value = false
  loginUsername.value = ''
  loginPassword.value = ''
  registerUsername.value = ''
  registerPassword.value = ''
})
</script>