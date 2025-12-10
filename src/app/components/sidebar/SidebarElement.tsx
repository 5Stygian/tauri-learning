export default function SidebarElement({ content: string }): React.ReactElement {
  return (
    <div
      className="display-inline mx-auto my-12 text-cyan-50 
                 rounded-lg 
                 hover:bg-sky-200"
    >{content}</div>
  );
}
