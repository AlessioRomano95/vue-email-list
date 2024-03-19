console.log('js ok')

const {createApp} = Vue 
const api = 'https://flynn.boolean.careers/exercises/api/random/mail'
const app = createApp({
    data: () => ({
        usersEmail: [],
    }),
    created(){
        for(let i = 0; i < 10; i++) {
            axios.get(api).then((res) => {
                this.usersEmail.push(res.data.response)
            })
        }
    }
})
app.mount('#root')