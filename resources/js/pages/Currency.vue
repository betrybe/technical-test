<template>
    <div class="container">
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                    BeTryBe
                </div>
                <div>
                    <p style="font-size: 30px">Taxa de conversão de Bitcoins</p>
                </div>
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Atualização de valor monetário</h3>
                    </div>
                    <div class="card-body">
                        <form autocomplete="off" @submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="currency">Moeda <span class="text-danger">*</span></label>
                                    <select id="currency" v-model="currency" @change="onChange()"
                                            :class="{'is-invalid': errors.currency}"
                                            class="form-control">
                                        <option value="" disabled selected>Selecione</option>
                                        <option v-for="currencie in currencies"
                                                v-bind:value="currencie.currency">
                                            {{ currencie.currency }}
                                        </option>
                                    </select>
                                    <div class="pt-6">
                                        Valor Atual: {{ current_value }}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="room">
                                        Novo Valor
                                    </label>
                                    <input
                                        v-model="value"
                                        type="text"
                                        class="form-control"
                                        id="room"
                                        placeholder="Valor"
                                    />
                                </div>
                            </div>
                            <button type="submit" @click="redirectToHome()" class="btn float-left"
                                    style="background: #38c172; color: #ffffff">Voltar
                            </button>
                            <button type="submit" class="btn btn-primary float-right">Atualizar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                errors: '',
                currencies: [],
                currencies_model: [],
                currency: '',
                current_value: '',
                value: '',

            };
        },
        mounted() {
            this.fetchCurrencies();
        },
        methods: {
            onSubmit() {
                this.axios
                    .put("crypto/btc", {
                        currency: this.currency,
                        value: this.value,
                    })
                    .then(response => {
                        this.currency = '';
                        this.value = '';
                        this.current_value = '';
                        this.$toastr.s("Taxa de conversão atualizada com sucesso!", "Sucesso")

                        this.handleSubmit();
                    })
                    .catch(error => {
                        this.has_error = true;
                        if (error.response.status === 422) {
                            this.$toastr.w(
                                "Verifique os dados preenchidos e tente novamente",
                                "Existem erros no formulário"
                            );
                            this.errors = error.response.data.errors || {};
                        }

                        if (error.response.status === 500) {
                            this.$toastr.e(
                                "Caso o problema persista entre em contato com o Administrador",
                                "Erro ao tentar cadastrar uma disciplina"
                            );
                        }
                    });
            },
            fetchCurrencies() {
                this.axios.get("currencies").then(response => {
                    this.currencies = response.data.data;
                    this.currencies_model = response.data.currencies;

                });
            },
            handleSubmit() {
                this.$router.push({name: "currency"});
            },
            onChange(value) {
                this.current_value = this.currencies_model[this.currency];
            },
            redirectToHome() {
                let redirectTo;
                redirectTo = 'home';
                this.$router.push({name: redirectTo})
            }
        }
    };
</script>
