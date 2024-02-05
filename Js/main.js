const { createApp } = Vue
createApp({
    data() {
        return {
            arrayEmail:[]
        }
    },
    methods:{
        generaMail(){
            for(i=0 ; i<10 ; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response)=>{
                    const risultato=response.data.response
                    // console.log(risultato)
                    this.arrayEmail.push(risultato)
                })
            }
        }
    },
}).mount('#app')