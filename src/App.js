import img_L from "./img_L.png";
import img_M from "./img_M.png";
import img_XL from "./img_XL.png";
import img_XXL from "./img_XXL.png";
import img_none from "./img_none.png";
import Logo from "./Logo.png";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [selectedClient, setSelectedClient] = useState("one"); //default value
  const [Bandera, setBandera] = useState("");
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setBandera("true");
  }

  function handleSelectChange(string) {
    setSelectedClient(string);
  }
  console.log(selectedClient);
  return (
    <div className="App">
      <div className="selector_size">
        <div className="navbar">
          <a href="mgm.empretienda.com.ar">
            <img className="mgm-logo" src={Logo}></img>
          </a>
        </div>
        <h2 className="subtitle">ELEGÍ LA MEDIDA QUE MEJOR SE ADAPTE A VOS!</h2>
        <div className="contenedor-centro">
          <div className="contenedor_modelo">
            <div className="img-container">
              {selectedClient === "M" && (
                <div>
                  <img classname="full_img" src={img_M}></img>
                  {Bandera === "true" && (
                    <img className={`abs${selectedClient}`} src={file} />
                  )}
                  <h4 className="precio">
                    Precio: $3600 + Envio gratis <br></br>a sucursal del correo.
                  </h4>
                </div>
              )}
              {selectedClient === "one" && (
                <>
                  <img classname="full_img" src={img_none}></img>
                </>
              )}
              {selectedClient === "L" && (
                <>
                  <img classname="full_img" src={img_L}></img>
                  {Bandera === "true" && (
                    <img className={`abs${selectedClient}`} src={file} />
                  )}
                  <h4 className="precio">
                    Precio: $4200 + Envio gratis <br></br>a sucursal del correo.
                  </h4>
                </>
              )}
              {selectedClient === "XL" && (
                <>
                  <img classname="full_img" src={img_XL}></img>
                  {Bandera === "true" && (
                    <img className={`abs${selectedClient}`} src={file} />
                  )}
                  <h4 className="precio">
                    Precio: $4600 + Envio gratis <br></br>a sucursal del correo.
                  </h4>
                </>
              )}
              {selectedClient === "XXL" && (
                <>
                  <img classname="full_img" src={img_XXL}></img>
                  {Bandera === "true" && (
                    <img className={`abs${selectedClient}`} src={file} />
                  )}
                  <h4 className="precio">
                    Precio: $5000 + Envio gratis <br></br>a sucursal del correo.
                  </h4>
                </>
              )}
            </div>
          </div>

          <div className="options">
            <div className="buttons">
              <button className="btn" onClick={() => handleSelectChange("M")}>
                MEDIDA M <br></br>(82X32CM)
              </button>
              <button className="btn" onClick={() => handleSelectChange("L")}>
                MEDIDA L <br></br>(90X40CM)
              </button>
              <button className="btn" onClick={() => handleSelectChange("XL")}>
                MEDIDA XL <br></br>(100X60CM)
              </button>
              <button className="btn" onClick={() => handleSelectChange("XXL")}>
                MEDIDA XXL <br></br>(110X70CM)
              </button>
            </div>
          </div>
        </div>

        <div className="add_model">
          <h2>AGREGAR IMAGEN:</h2>
          <div className="modelo">
            <input
              class="custom-file-input"
              type="file"
              onChange={handleChange}
            />
            <button className="fakebtn">Subir imagen</button>
          </div>
        </div>

        <div className="Mail">
          <h2>YA TE DECIDISTE?</h2>

          <a
            target="_blank"
            className="button-email"
            href="https://wa.me/2644853377?text=Buenas!%20Ya%20tengo%20decidido%20mi%20diseño,%20en%20la%20medidad ..."
          >
            HABLANOS
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
