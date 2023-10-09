import { useAuth } from '../contexts/AuthContext';

function Main() {
  const { currentUser, signOut } = useAuth();
  console.log(currentUser);

  return (
    <div className="card lg:card-side bg-base-100 shadow-lg w-full max-w-sm mx-auto lg:max-w-4xl">
      {/* <div className="hidden bg-cover lg:block lg:w-1/2" style="background-image: url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80');"></div> */}

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <span className="font-extrabold">SERVICE NAME</span>
        </div>
        <p className="mt-3 text-xl text-center text-gray-600 ">
          Welcome back! {currentUser?.displayName}
        </p>
        <button onClick={signOut}>로그아웃</button>
      </div>
    </div>
  );
}

export default Main;
