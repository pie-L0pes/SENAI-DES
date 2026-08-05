atob() - btoa() -> descripta o token, a parte do meio



allow pasting -> permitir colar



teste caixa branca - teste com dados certos

teste caixa preta - teste com dados errados



roteiro de teste

1 criar user?funcio...

2 fazer login(teste caixa preta/caixa branca)

3 registrar token

4 listar users

5 listar animais



Swagger(substituição do insomnia mais barato) -> documentação ativa



\------------------------------------------------------------

###### ***Processo de autenticação - UI(user interface)web/mobile***



JWT{json, web, token}

pacote:

\- xabcj -> crypto

\- xxkhy -> dados

\- ctwx -> chave



API -> REQ post{user.email

&#x20;    |         {user.senha

&#x20;    |      Res **Bearor "token"**

&#x20;    |

&#x20;    v

&#x20;     tela de login ----> salvar local ---> tela do usuário(excluir) ---> excluir local

&#x20;                                           REQ get - put - delete } boarer "token"

&#x20;                                           RES Dados - sucesso - fracasso - expirado

