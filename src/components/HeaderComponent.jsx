import {useNavigate} from 'react-router-dom';



function HeaderComponent() {

  const navigate = useNavigate();
  const homeClick = () => navigate('/');

  return (
    <div>
      <header >
        <nav className=' navbar navbar-dark bg-dark '>
          <span  onClick={homeClick} className="navbar-brand "> EmployeeManagement System</span>
        </nav>
      </header>

    </div>
  )
}

export default HeaderComponent