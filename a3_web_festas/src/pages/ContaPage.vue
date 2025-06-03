`Login.vue`
```vue
<template>
  <q-page class="flex flex-center bg-gradient">
    <q-card class="login-card q-pa-md">
      <div class="login-title">Login do Usuário</div>

      <q-form @submit.prevent="submitLogin" ref="loginForm" class="q-gutter-md">
        <q-input
          filled
          v-model="email"
          label="E-mail"
          type="email"
          :rules="[val => val && val.length > 0 || 'Digite o e-mail']"
          lazy-rules
          autofocus
        />
        <q-input
          filled
          v-model="password"
          label="Senha"
          type="password"
          :rules="[val => val && val.length > 0 || 'Digite a senha']"
          lazy-rules
        />
        <div class="row justify-between items-center q-mt-md">
          <q-btn type="submit" label="Entrar" color="primary" unelevated />
          <div role="button" tabindex="0" class="forgot-password" @click="forgotPasswordDialog = true" @keyup.enter="forgotPasswordDialog = true">Esqueci minha senha</div>
        </div>
      </q-form>
    </q-card>

    <!-- Dialog Esqueci Minha Senha -->
    <q-dialog v-model="forgotPasswordDialog" persistent>
      <q-card style="min-width: 300px;">
        <q-card-section>
          <div class="text-h6">Recuperar Senha</div>
          <div class="text-subtitle2 q-mt-sm">Informe seu e-mail para recuperação da senha</div>
        </q-card-section>

        <q-card-section>
          <q-input
            filled
            v-model="forgotEmail"
            label="E-mail"
            type="email"
            :rules="[val => val && val.length > 0 || 'Digite o e-mail']"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn flat label="Enviar" color="primary" @click="sendForgotPassword" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const email = ref('')
const password = ref('')
const forgotPasswordDialog = ref(false)
const forgotEmail = ref('')

function submitLogin() {
  if (!email.value) {
    $q.notify({ type: 'negative', message: 'Por favor, informe o e-mail' })
    return
  }
  if (!password.value) {
    $q.notify({ type: 'negative', message: 'Por favor, informe a senha' })
    return
  }
  // Simulação da ação de login
  // Aqui você faria a chamada real do backend para autenticação.
  $q.notify({ type: 'positive', message: `Login efetuado com sucesso para: ${email.value}` })
  email.value = ''
  password.value = ''
}

function sendForgotPassword() {
  if (!forgotEmail.value) {
    $q.notify({ type: 'negative', message: 'Por favor, informe o e-mail para recuperação' })
    return
  }
  // Simulação de envio de e-mail para recuperação
  $q.notify({ type: 'positive', message: `Instruções de recuperação enviadas para: ${forgotEmail.value}` })
  forgotPasswordDialog.value = false
  forgotEmail.value = ''
}
</script>

<style scoped>
.bg-gradient {
  min-height: 100vh;
  background: linear-gradient(135deg, #1d2b64, #f8cdda);
}
.login-card {
  width: 360px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.2);
  background-color: white;
}
.login-title {
  font-weight: 700;
  font-size: 1.8rem;
  color: #1976d2;
  margin-bottom: 20px;
  text-align: center;
}
.forgot-password {
  cursor: pointer;
  color: #1976d2;
  font-weight: 600;
  text-decoration: underline;
  user-select: none;
}
</style>
