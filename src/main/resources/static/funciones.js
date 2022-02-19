function eliminar(id){
	Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
	$.ajax({
		url: "/eliminar/"+id,
		success: (response)=>{
			console.log(response);
		}
	})
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    ).then((ok)=>{
		location.href="/listar";
})
  }
})
}