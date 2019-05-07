			var score=0;
			function dragstart_handler(ev){
				console.log("drag start");
				// Change the source element's border to signify drag has started
				ev.currentTarget.style.border="dashed 1px #000";
				ev.dataTransfer.effectAllowed = "move";
				// Set the drag's format and data. Use the event target's id for the data
				ev.dataTransfer.setData("imgid", ev.target.id);
				ev.dataTransfer.setDragImage(ev.target, 0, 0);

			}
			function dragover_handler(ev){
				console.log("dragOver");

				ev.preventDefault();
				
			 }
			function drop_handler(ev){
				console.log("Drop");
				ev.preventDefault();
				// Get the data, which is the id of the drop target
				var imgId = ev.dataTransfer.getData('imgId');
				var targetId = ev.target.id;
				ev.target.appendChild(document.getElementById(imgId));
				ev.target.style.padding="3px";
				ev.target.style.height="95px";
				pollresults(imgId,targetId);
			 }
			function pollresults(img,target){
				
				var srclastletter = img.substring(img.length-1, img.length);
				var targetlastletter = target.substring(target.length-1, target.length);
				console.log(target);
				if(srclastletter === targetlastletter)
				{
				document.getElementById(target).style.border="solid 1px green";
				document.getElementById(img).setAttribute('draggable', false);
				document.getElementById('emoji-container').innerHTML= "<img src='images/good-job.png' width='40%'/> ";
				
				
				var x = srclastletter;
				x.toString();
				console.log(x);
				switch (x) {
					case "k":
						text = "<p>Come on! Lets look at the benefits of<span style='color:re'> Vitamin K</span></p><ul><li>Blood Clotting</li><li>Strong  Bones</li></</ul>";
						
						break;
					case "a":
						text = "<p>Come on! Lets look at the benefits of <span class='text-primary'>Vitamin A</span></p><ul><li>Growth and development</li><li>Immune	function</li><li>Reproduction</li><li>Red blood cell formation</li><li>Skin	and	bone formation</li><li>Vision</li></</ul>";
						break;
					case "c":
						text = "<p>Come on! Lets look at the benefits of<span class='text-warning'> Vitamin C</span></p><ul><li>Antioxidant	</li><li>Collagen and connective tissue formation</li><li>	Immune	function</li><li>Wound	healing</li></</ul>";
						break;
					case "e":
						text = "<p>Come on! Lets look at the benefits of <span class='text-success'>Vitamin E</span></p><ul><li>Antioxidant	</li><li>Formation of blood	vesselss</li><li>Immune	function</li></ul>";
						break;
					default:
						text = "No value found";
				}
				document.getElementById('modal-body').innerHTML = text;
				
				 score += 1;
				 var star= document.getElementsByClassName('checked')[score-1];
				 star.style.color="orange";
				

				}
				else{
				document.getElementById('emoji-container').innerHTML= "<img src='images/oh-no.png' width='40%'/> ";				
				document.getElementById('modal-body').innerHTML="<div class='text-center'><h1>Oh No! Its Wrong</h1> <h4>Lets start over</h4><p> Who Knows! May be this time, you won't mess up</p></div>";
				/*if(score!=0)
				{score-=1;
				var star= document.getElementsByClassName('checked')[score];
				 star.style.color="black";}*/

				}
				
				
				$("#myModal").modal("toggle");
				console.log(score);
				if(score==4){
				setTimeout(function(){
				document.getElementById('emoji-container').innerHTML= " ";
				document.getElementById('modal-body').style.backgroundImage="url(images/ballon-drop.gif)";
				document.getElementById('modal-body').style.padding="20%";
				document.getElementById('modal-body').height="300px";
				document.getElementById('modal-body').innerHTML="<h4>Congrtulations! You got 4 stars</h4>";},3000);
				}
				
			 }