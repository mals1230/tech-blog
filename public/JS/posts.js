async function editFormHandler(event) {
    event.preventDefault();

    const userComment = document.querySelector('#post-comment').value;
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
  
    const response = await fetch(`/api/post/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        userComment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace(`/post/${id}`);
    } else {
      alert('Failed to post');
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', editFormHandler);