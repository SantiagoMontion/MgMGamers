import img_L from "./img_L.png";
import img_M from "./img_M.png";
import img_XL from "./img_XL.png";
import img_XXL from "./img_XXL.png";
import img_none from "./img_none.png";
import Logo from "./Logo.png";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [selectedClient, setSelectedClient] = useState("none"); //default value
  const [Bandera, setBandera] = useState("");
  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setBandera("true");
  }

  function handleSelectChange(string) {
    setSelectedClient(string);
  }

  return (
    <div className="App">
      <div className="selector_size">
        <div className="navbar">
          <a href="https://mgmgamers.store" target="_blank">
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
                    + Envio gratis <br></br>a sucursal del correo.
                  </h4>
                </div>
              )}
              {selectedClient === "none" && (
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
                    + Envio gratis <br></br>a sucursal del correo.
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
                    + Envio gratis <br></br>a sucursal del correo.
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
                    + Envio gratis <br></br>a sucursal del correo.
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
          <div className="modelo">
            <h2>AGREGAR IMAGEN:</h2>
            <input
              type="file"
              name="file"
              id="file"
              class="inputfile"
              onChange={handleChange}
            />

            <label for="file">Subir imagen</label>
          </div>
        </div>

        <div className="Mail">
          <h2>YA TE DECIDISTE?</h2>

          <a
            target="_blank"
            className="button-email"
            href={
              "https://wa.me/2644853377?text=Buenas!%20Ya%20me%20decidí%20por%20la%20medida" +
              " " +
              selectedClient
            }
          >
            HABLANOS
          </a>
          <h4 className="subtitle-h4">
            Podes pasarnos la imagen que elegiste como Link por What's App o
            podes enviarla a email
            <br></br>hola@mgmgamers.selector_size
          </h4>
        </div>
        <div className="more-info-2">
          <h3 className="subtitle-h3">
            No te olvides que estas no son nuestras unicas medidas...<br></br>
            Vos podes personalizar y elegir la tuya a tu gusto
            <br></br>LLegamos hasta 150x100cm...<br></br>
          </h3>
          <a
            target="_blank"
            className="button-email"
            href="https://mgmgamers.store/mousepad-personalizado/"
          >
            ACÁ TE ENSEÑAMOS COMO
          </a>
        </div>
      </div>

      <div className="instagram">
        <a target="_blank" href="https://www.instagram.com/mgmgamers.store/">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png"></img>
        </a>
      </div>
    </div>
  );
}

export default App;
