import dotenv from 'dotenv'

export default async function setupEnv(){
    console.log(process.env.URL);
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
    dotenv.config({
        path:'./.env',
        override:true
    })
        console.log(process.env.URL);
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
}
