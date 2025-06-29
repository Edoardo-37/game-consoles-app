import { Link } from "react-router-dom";

const PageLinks = () => {
  return (
    <>
      <Link
        title="Vai alla pagina dedicata alla storia delle console Nintendo"
        className="text-error font-bold hover:underline my-4 p-4"
        to="/nintendo-consoles"
      >
        Nintendo
      </Link>
      <Link
        title="Vai alla pagina dedicata alla storia delle console Sony"
        className="text-info font-bold hover:underline my-4 p-4"
        to="/sony-consoles"
      >
        Sony
      </Link>
      <Link
        title="Vai alla pagina dedicata alla storia delle console Microsoft"
        className="text-success font-bold hover:underline my-4 p-4"
        to="/microsoft-consoles"
      >
        Microsoft
      </Link>
    </>
  );
};
export default PageLinks;
