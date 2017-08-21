# Inf1407
Material de programação para a web

Site da disciplina: http://cursos.meslin.com.br/home/Programao-para-a-Web

**Anotações gerais**
i
Diferença entre métodos out.write() e out.print()

out.write ->Escreve uma string. É menos abstrato e explode ao receber a string Null como argumento, resultando em NullPointerException

out.print ->Imprime uma string. É capaz de imprimir a string Null


Tudo que for escrito entre "` `" (acentos invertidos) é visto como código que não será carregado

Quando o site é gerado o primeiro arquivo a ser procurado é o "index.html", logo este não pode ser colocado em uma subpasta por ser a referência inicial.


`<a href="2017-08-16/fatorial.jsp">Calculo fatorial</a><br/>`

No caso acima é possível linkar o arquivo fatorial.jsp desta forma se o arquivo chamador estiver no mesmo projeto. Caso contrário seria necessário o endereço completo para referência ser correta. 


Um request contém todos os dados que o usuário passa através de um formulário

O action em um formulário define como os dados serão tratados. Se existe manipulação de dados precisa ir para um arquivo .jsp


No método post os dados são enviados sem a url, útil quando tenho informações sensíveis envolvidas como senhas ou informação muito grande
No método get os dados dele aparecem junto com a url, quando quero que o usuário possa manipular suas informações, como numa busca do google
GET não transporta informação sensível em momento algum, mesmo com https vai revelar na url


<%=request.getParameter("camposenha")%>

Colocando o sinal de igual depois do percentual faz com que o compilador tente converter o parâmetro em uma string e imprimir logo em seguida

<input type="checkbox">clica aqui</input>

Checkbox é o único input que precisa fechar com a tag </input> ISSO FOI MENTIRA DO THIAGO
Apenas os checkbox marcados são enviados para o servidor
