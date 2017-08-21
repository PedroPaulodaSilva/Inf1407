# Inf1407
Material de programação para a web

Site da disciplina: http://cursos.meslin.com.br/home/Programao-para-a-Web

**Anotações gerais**

Diferença entre métodos out.write() e out.print()

out.write ->Escreve uma string. É menos abstrato e explode ao receber a string Null como argumento, resultando em NullPointerException

out.print ->Imprime uma string. É capaz de imprimir a string Null


Tudo que for escrito entre "` `" (acentos invertidos) é visto como código que não será carregado

Quando o site é gerado o primeiro arquivo a ser procurado é o "index.html", logo este não pode ser colocado em uma subpasta por ser a referência inicial.


`<a href="2017-08-16/fatorial.jsp">Calculo fatorial</a><br/>`

No caso acima é possível linkar o arquivo fatorial.jsp desta forma se o arquivo chamador estiver no mesmo projeto. Caso contrário seria necessário o endereço completo para referência ser correta. 
