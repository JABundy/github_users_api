const requestData = async () => {
	let response = await fetch(`https://api.github.com/users`);
	data = await response.json();
	appState.data = data;
  }

// 

  let userCard = document.createElement("div");
  usercard.id = "userbox";
  let userImage = document.createElement("img");
  userImgage.id = "userimg";
  let userName = document.createElement("h4");
  userName.id = "username";
  let showBtn = document.createElement("button");
  showBtn.id = "showbtn";
  showBtn.innerText = "Show more";

  
  <div className="container">
               
                {
                    users.map((curElem) => {
                        return (

                            <div className="card_item" key={curElem.id}>
                                <div className="card_inner">
                                    <img src={curElem.avatar_url} alt="" />
                                    <div className="userName">{curElem.login}</div>
                                    <div className="userUrl">{curElem.url}</div>
                                    <div className="detail-box">

                                        <div className="gitDetail"><span>Articles</span>23</div>
                                        <div className="gitDetail"><span>Following</span>45</div>
                                        <div className="gitDetail"><span>Followers</span>11</div>
                                    </div>
                                    <button className="seeMore">See More</button>
                                </div>

                            </div>
                        )
                    })
                }

            </div>              


// async function getData() {
	// document.getElementById("").innerHTML = '';
	// document.getElementById(""").value = this.textContent;
	// var response = await fetch(
		// "http://https://api.github.com/users");
	// var data = await response.json();
	// console.log(data);
// }
