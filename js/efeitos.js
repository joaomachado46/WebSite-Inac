$(document).ready(function(){
				
	$("#logotipo").on("mouseover", function(){

		$("#menu li").addClass("efeito"); 

		}).on("mouseout", function(){

	$("#menu li").removeClass("efeito");

		});

		$("#butao").on("focus", function(){

			$("#input-search").addClass("activo");

			}).on("blur",function(){

			$("#input-search").removeClass("activo");
		})	

		$("#btn-bars").on("click", function(){

			$("header").toggleClass("open-menu");

			})

		$("#closeX").on("click",function(){

			$("header").removeClass("open-menu");
		})

		$("#btn-search").on("click", function(){

			$("#search-btn").toggleClass("search");

			})

		$("#btn-searh").on("click",function(){

			$("#search-btn").removeClass("search");
		})
});
