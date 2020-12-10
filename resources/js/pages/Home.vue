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
                <div class="row text-center">
                    <div class="col">
                        <div class="pb-3">
                            <button @click="redirectToCurrency()" class="btn btn-primary btn-lg btn-block">
                                <span> Atualizar valor monetário</span>
                            </button>
                        </div>
                        <div class="card mb-3 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 fw-normal">BTC</h4>
                            </div>
                            <div class="card-body">
                                {{data.bpi.BTC.rate}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        <div class="card mb-3 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 fw-normal">USD</h4>
                            </div>
                            <div class="card-body">
                                {{data.bpi.USD.rate}}
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 fw-normal">BRL</h4>
                            </div>
                            <div class="card-body">
                                {{data.bpi.BRL.rate}}
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 fw-normal">EUR</h4>
                            </div>
                            <div class="card-body">
                                {{data.bpi.EUR.rate}}
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mb-3 shadow-sm">
                            <div class="card-header">
                                <h4 class="my-0 fw-normal">CAD</h4>
                            </div>
                            <div class="card-body">
                                {{data.bpi.CAD.rate}}
                            </div>
                        </div>
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
                loading: true,
                data: []
            };
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.axios.get("crypto/btc").then(response => {
                    this.data = response.data;
                });
            },
            redirectToCurrency(){
                let redirectTo;
                redirectTo = 'currency';
                this.$router.push({name: redirectTo})
            }
        }
    };
</script>
