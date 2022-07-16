import AuthorCard from '../components/AuthorCard';

export default function AuthorsPage() {
  return (
    <>
      <h1>Authors</h1>
      <h2>List of Authors</h2>
      <ul>
        <li>Thoreau</li>
        <li>Seneca</li>
        <li>Stephen King</li>
        <AuthorCard />
      </ul>
    </>
  );
}
