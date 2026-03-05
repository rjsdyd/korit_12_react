export default function MyForm() {
  const handleSubmit = e => {
    e.preventDefault();
    alert('Form Submit');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" />
        <input type="submit" value='제출'/>
      </form>
    </>
  )
}