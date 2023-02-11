const URL = ' http://localhost:3000/user1';
let user = [];
let counter1;
let counter2;	
let counter3;	
	let comment = document.querySelector('.comment');
	let submit = document.querySelector('.submit');
let getData = async (URL) => {
	const res = await fetch(URL)
	const data = await res.json()
	return data
}

const fillList = async () => {
	let user = await getData(URL);
	counter1 = user["counter1"]
	counter2 = user["counter2"]
	let list = document.querySelector('.container')
	/*for(const key in user){*/
		list.insertAdjacentHTML(`beforeend`,
			`<div class="post">
				 <img src="img/heart1.png" class="heart">
					  <img src="img/post.jpg" class="in-post">
				 <p class="like"><img src="/img/like-regular-240.png" alt="" srcset="" class="like1">${user["counter1"]}</p><br>
				 <p class="dislike"><img src="/img/dislike-regular-240.png" alt="" srcset="" class="like1">${user["counter2"]}</p>
			</div>
			<input type="text" class="comment" placeholder="Напиши комментарий...">
			<input type="submit" class="submit">`
	  )
		/*}*/

	  const likeEl = document.querySelector('.like');
	  const dislikeEl = document.querySelector('.dislike');
	  likeEl.addEventListener('click', async() => {
		counter1++;
		heart.classList.add('ani-like');
		setTimeout(()=>{
			heart.classList.remove('ani-like')
		}, 1000)
		user["counter1"] = counter1;
		let postData = async (url, obj) => { 
		const res = await fetch(url, {
			 method: 'POST',
			 body: JSON.stringify(obj),
			 headers: { 'Content-type': 'application/json; charset=UTF-8' },
		})
		return res.json();
  }
  postData(URL,user);
	});
	
	dislikeEl.addEventListener('click', async() => {
		counter2++;
		user["counter2"] = counter2;
	let postData = async (url, obj) => { 
	const res = await fetch(url, {
		  method: 'POST',
		  body: JSON.stringify(obj),
		  headers: { 'Content-type': 'application/json; charset=UTF-8' },
	})
	return res.json();
}
postData(URL,user);
})
   const post = document.querySelector('.post');
	const heart = document.querySelector('.heart');
	
	user["counter2"] = counter2;
}
	fillList()
