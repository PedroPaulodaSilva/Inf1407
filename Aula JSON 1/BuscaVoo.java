package br.com.pedro.ajax.json;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

/**
 * Servlet implementation class BuscaVoo
 */
@WebServlet({ "/BuscaVoo", "/2017-11-08/BuscaVoo" })
public class BuscaVoo extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		doPost(request, response);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JSONObject voo = new JSONObject();
		voo.put("aircraft", "A320");
		voo.put("maxPax", 200);
		
		JSONObject piloto = new JSONObject();
		piloto.put("firstName", "John");
		piloto.put("lastName", "Doe");
		voo.put("pilot", piloto);
		
		voo.acumulate("passenger", "George");
		voo.acumulate("passenger", "Thomas");
		
		
		//enviar os dados no formato JSON
		PrintWriter out = response.getWriter();
		response.setContentType("text/plain");
		out.println(voo.toString(2));
		
	}

}
