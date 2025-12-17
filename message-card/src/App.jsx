import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <MessageCard
        title="Welcome"
        message="Welcome to the React application."
      />

      <MessageCard
        title="Success"
        message="You have successfully completed the task."
      />

      <MessageCard
        title="Warning"
        message="Please check your inputs carefully."
      />

      <MessageCard
        title="Info"
        message="Props help make components reusable."
      />
    </div>
  );
}

export default App;
