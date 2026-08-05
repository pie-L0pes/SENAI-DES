import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    query, 
    orderBy, 
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCb05PEhNzXrIbIGH2AGdeEjHjtAOKP1tw",
  authDomain: "pizza-d3d66.firebaseapp.com",
  projectId: "pizza-d3d66",
  storageBucket: "pizza-d3d66.firebasestorage.app",
  messagingSenderId: "816729151315",
  appId: "1:816729151315:web:97b37e0c52c7bd736833a6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider;

//Elementos visuais

const authScreen = document.getElementById('auth-screen');
const dashboardScreen = document.getElementById('dashboard-screen');
const pizzaGrid = document.getElementById('pizza-grid');


//Elementos login

const inputEmail = document.getElementById('auth-email');
const inputSenha = document.getElementById('auth-senha');

//Elementos cadastro

const inputNome = document.getElementById('pizza-nome');
const inputIngredientes = document.getElementById('pizza-ingredientes');
const inputTipo = document.getElementById('pizza-tipo');
const inputPreco = document.getElementById('pizza-preco');
const inputImagem = document.getElementById('pizza-imagem');

//Monitor de autenticação

onAuthStateChanged(auth,(user) =>{
    if(user){
        authScreen.classList.add('hidden');
        dashboardScreen.classList.remove('hidden');
        document.getElementById('user-display-name').textContent = user.displayName || user.email;
        carregarCardapio();
    }else{
        authScreen.classList.remove('hidden');
        dashboardScreen.classList.add('hidden');
        pizzaGrid.innerHTML = '';
    }
});
    //Processos de login/cadastro

    document.getElementById('btn-cadastro').addEventListener('click', async()=>{
        const email = inputEmail.Value.trim();
        const senha = inputSenha.value.trim();
        if(!email || !senha) return alert('Preencha o email e senha!');
        try{
            await createUserWithEmailAndPassword(auth, email, senha);
            alert('Conta criada com sucesso!');
        }catch (e){
            alert(e.message);
        }
    });

     document.getElementById('btn-login').addEventListener('click', async()=>{
        const email = inputEmail.Value.trim();
        const senha = inputSenha.value.trim();
        if(!email || !senha) return alert('Preencha o email e senha!');
        try{
            await signInWithEmailAndPassword(auth, email, senha);
        }catch (e){
            alert(e.message);
        }
    });

    document.getElementById('btn-google').addEventListener('click', async()=>{
        try{
            await signInWithPopup(auth, googleProvider);
        }catch (e){
            alert('Erro Google: ' + e.message);
        }
    });
    document.getElementById('btn-logout').addEventListener('click', () => signOut(auth));





momomo