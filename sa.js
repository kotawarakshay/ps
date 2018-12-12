

		  function consumer()
		  {
			var unit=document.getElementById("noofunits").value;
			if(unit<=100)
			{
				var amount=unit*2.96;
			}
			else
			{
				var amount=unit*5.56;
			}

			document.write("Total bill amount is"amount);
		  }
		  