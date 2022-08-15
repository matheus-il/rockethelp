![RocketHelp Banner](.github/RocketHelpReadmeBanner.png)

💻 Aplicativo de solicitações de manutenção de equipamentos internos que pode ser usado em uma empresa.  

## Tecnologias:

- **[React Native](https://reactnative.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Expo Bare Workflow](https://docs.expo.dev/bare/exploring-bare-workflow/)**


## Bibliotecas:

- **[Native Base](https://nativebase.io/)**
- **[React Native Firebase](https://rnfirebase.io/)**
- **[React Navigation](https://reactnavigation.org/)**
- **[Phosphor Icons](https://github.com/duongdev/phosphor-react-native)**
- **[React Native SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer)**
- **[Expo Google Fonts](https://github.com/expo/google-fonts)**

## Imagens
<details>
<summary>Prints das telas do projeto. 🙂📱</summary>
  
<h2>Tela de Login</h2>
<img alt="Tela de Login" src="https://user-images.githubusercontent.com/22305898/184730519-d59c545f-ba4e-456a-a589-6ef1f83c0cf9.png"> </img>
  
<h2>Solicitações Abertas</h2>
<img alt="Solicitações Abertas" src="https://user-images.githubusercontent.com/22305898/184730535-3a7157f8-941c-484a-ad5d-93e5b7fd19e2.png"> </img>
  
<h2>Solicitações Fechadas</h2>
<img alt="Solicitações Fechadas" src="https://user-images.githubusercontent.com/22305898/184730540-09f6020a-9d8a-483c-b902-6f3cf274ae87.png"> </img>
  
<h2>Abrir Chamado</h2>
<img alt="Abrir Chamado" src="https://user-images.githubusercontent.com/22305898/184730525-71444e27-5112-45e4-b66a-ce61ce8e1918.png"> </img>
  
<h2>Resolver Chamado</h2>
<img alt="Resolver Chamado" src="https://user-images.githubusercontent.com/22305898/184730531-34437476-a4b8-4807-bed3-d0ac5bd8e889.png"> </img>
  
<h2>Chamado fechado</h2>
<img alt="Chamado Fechado" src="https://user-images.githubusercontent.com/22305898/184730528-d12433d0-f768-4fb9-8f1c-2651a517c0db.png"> </img>
</details>
  
  
## Aprendizado:

- **Expo Bare Workflow** que permite adicionar código nativo (Android e iOS) sem perder as facilidades do Expo e ainda utilizando **TypeScript** para melhorar a produtividade e até encontrar erros no código facilmente.
- **Native Base** foi o coração desta aplicação em relação a interface. É uma biblioteca de componentes que foi usada em lugar dos principais core componets.
- Como o React Native por padrão, não aceita svg, foi utilizado o **React Native SVG Transformer** para poder importar esses arquivos e usar com sintaxe de componente. Tipagem também foi acrescentado ao TypeScript para que ele reconheça a extensão svg.
- Quase finalizando, foi utilizado o ```expo prebuild```, neste ponto não era mais possível usar o aplicativo Expo Go (sem suporte ainda), devido a introdução do **Firebase** na qual utilizamos código nativo. Porém, ainda com a ajuda do Expo, podemos utilizar plugins para automatizar a implementação desses códigos.

## 🧪 Experimente:
 
NOTA: É necessário ter todo o ambiente de desenvolvimento configurado antes (como o android studio ou app Expo GO).
```bash 
git clone https://github.com/matheus-il/rockethelp.git
```

Depois execute as seguintes ações de linha de comando:
```bash
cd rockethelp
npm install
```
NOTA: Por motivos de segurança, foi retirado os arquivos de configuração do firebase *google-services.json* (android) e *GoogleService-Info.plist* (ios). Para testar, você deve baixar seus próprios arquivos de configuração em sua conta no [firebase](https://console.firebase.google.com/) registrando o aplicativo com o nome do pacote ```com.rockethelp``` (nenhuma outra configuração adicional é necessária).   
Deixe os arquivos baixados, na raiz do projeto.   
Em seguida execute estes comandos:
```bash
expo prebuild
expo run:android
```
OBS: Este processo pode levar um tempo.   
OBS²: Devido a falta de equipamento, não foi possível testar no iOS, mas você pode testar usando os mesmos comandos acima, porém substituindo ```run:android``` por ```run:ios```. Se houver erros, por favor, me informe.

## FAQ 

### *De onde saiu o design do app?*

O design foi desenvolvido pela equipe da Rocketseat no evento Ignite Lab. [Figma](https://www.figma.com/file/pSXn1mhn6adaaGC2wIl7pD/Rocket-Help---Ignite-Lab-(Community)?node-id=102%3A375)

### *Este projeto foi de evento?*

Sim! Organizado pela ela [Rocketseat](https://www.rocketseat.com.br/). O objetivo é aprender e conhecer o que há de mais moderno no frontend 💙.
