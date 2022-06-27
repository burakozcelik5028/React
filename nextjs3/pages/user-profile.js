function UserProfile(props) {
  const { userName } = props;
  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
}

export default UserProfile;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log("Server Side Codeeeee");
  return {
    props: {
      userName: "Burak",
    },
  };
}
