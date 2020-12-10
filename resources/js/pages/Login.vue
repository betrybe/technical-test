<template>
    <div class="container">
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                    BeTryBe
                </div>
                <!-- /.login-logo -->
                <div class="card">
                    <div class="card-body login-card-body">
                        <p class="login-box-msg">Inicie sua sessão</p>

                        <form autocomplete="off" @submit.prevent="handleSubmit">
                            <div class="input-group mb-3">
                                <input
                                    type="text"
                                    id="email"
                                    v-model="data.email"
                                    class="form-control"
                                    placeholder="Email"
                                    required
                                />
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-user"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <input
                                    type="password"
                                    id="password"
                                    v-model="data.password"
                                    class="form-control"
                                    placeholder="Senha"
                                    required
                                />
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <button
                                        type="submit"
                                        class="btn btn-primary btn-block btn-flat"
                                    >
                                        Entrar
                                    </button>
                                </div>
                                <!-- /.col -->
                            </div>
                        </form>
                    </div>
                    <!-- /.login-card-body -->
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import {TheMask} from 'vue-the-mask';

    export default {
        components: {
            TheMask
        },
        data() {
            return {
                data: {
                    email: "",
                    password: ""
                }
            };
        },
        beforeMount() {
            this.$auth.ready();
        },
        methods: {
            handleSubmit() {

                console.log('bateu')

                this.$auth
                    .login({
                        data: this.data,
                        success: function () {
                            let redirect = this.$auth.redirect();
                            let redirectTo;
                            redirectTo = 'home';

                            this.$router.push({name: redirectTo})
                            this.$toastr.s("Login efetuado com sucesso!", "Bem-vindo");
                        },
                        error: function (err) {

                            console.log(err)
                            this.data.password = "";
                            const error = err.response.data.error;
                            // toastr.error(error, "Usuário e/ou senha inválidos");
                        }
                    })
            }
        }
    };
</script>
