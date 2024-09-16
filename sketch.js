// Fantasia, Aventura, Drama

//A viagem de Chihiro, LIVRE, Fantasia, Aventura,
// Paddington, LIVRE, Fantasia, Aventura,

// Guardiçoes da Galaxias, 12, Fantasia, Aventura,
// As aventuras de pi, 10, Fantasia, Aventura, Drama

// Depois da chuva, 10 Drama

// Ladrões de bicicleta, 12, Drama
// O menino que descobriu o vento, 14, Drama


let campoIdade;
let campoFantasia;
let campoAventura;

function setup()
{
  createCanvas(800, 400);
  createElement("h2","Recomendador de filmes");
  createSpan("sua idade:")
  campoIdade = createInput("15");
  campoFantasia = createCheckbox("Gosta de Fantasia?");
  campoAventura = createCheckbox("Gosta de Aventura?");
}

function draw() {
  background("#8A71C9");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  fill(color(76,0,115)),
  textAlign(CENTER,CENTER);
  textSize(38);
  text (recomendacao, width/2, height/2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura)
{
  if (idade >=10)
    {
                if (idade >=14)
                {
                  return "O menino que descobriu o vento";
                 }
                      else
                        
                        {
                        if (idade>=12) 
                              {
                                if (gostaDeFantasia || gostaDeAventura)
                                 { 
                                  return "Homen aranha: aranha verso";
                                    }
                                else
                                  {
                                  return "Ladrões de bicicleta";
                                 }
                 }
                          }
                              
                        if (gostaDeFantasia)
                          {
                          return "As aventuras de pi";
                           }
                                  else
                                    {
                                      return "Depois da Chuva";
                                     }
                                    
                                    }
                                      else
    
                                    {
                if (gostaDeFantasia)
                  {
                  return "A viagem de Chihiro";
          
                 }

                  else
                    {
                      return "O feitiço do tempo"
                    }
   }   
    
}