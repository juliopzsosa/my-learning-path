import "./MiOrg.css";

const MiOrg = (props) => {
  /*  Status => Hooks
        useState()
        const [value, updaterFunction] = useState(initialValue); 
    */

  /*    const [showMembers, updateShowMem] = useState(true);
        const handleClick = () => {
            updateShowMem(!showMembers);
        };
    */

  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.triggerShow} />
    </section>
  );
};

export default MiOrg;
