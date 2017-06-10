class NegociacoesView {
	constructor(_element){
		this._element = _element
	}

	_template (model){
		return `
			<table class="table table-hover table-bordered">
	        <thead>
	            <tr>
	                <th>DATA</th>
	                <th>QUANTIDADE</th>
	                <th>VALOR</th>
	                <th>VOLUME</th>
	            </tr>
	        </thead>
	        
	        <tbody>
				${model.negociacoes.map((negociacao) => 
							`
								<tr>
									<td>${DataHelper.dataParaTexto(negociacao.data)}</td>
									<td>${negociacao.quantidade}</td>
									<td>${negociacao.valor}</td>
									<td>${negociacao.obtemVolume()}</td>								
								</tr>
							`
				).join("")}
	        </tbody>
	        
	        <tfoot>
				<td colspan="3"></td>
				<td>
				${
					model.negociacoes.reduce((total,negociacao) => total += negociacao.obtemVolume(),0.0)
				}	
				</td>
			</tfoot>
	    </table>
	    `
	}
		
	_update(model){
		console.log(model)
		this._element.innerHTML = this._template(model)
	}
}	