   function plan(){
                var sand=document.getElementById('plank')
                setInterval(() => {
                    color()
                }, 1000);function color(){
                    sand.style.color='yellow';
                }
            }
            function feedMe(){
                var feed=document.getElementById('feedback')
                setTimeout(() => {
                    show()
                }, 1000);function show(){
                    feed.style.width="max-Content";
                }
            }
