/////////////////////////////////////////////////////////////////////////////////////////////////////
// COMPONENT ////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

import { BsX } from 'react-icons/bs'
import { Row, Col, Button } from 'react-bootstrap';
import translate from "../../Assets/indexes/translate.json"
import nationality from "../../Assets/indexes/nationality.json"
import family_trans from "../../Assets/indexes/religious_family.json"
import cat_trans from "../../Assets/indexes/categories.json"

/////////////////////////////////////////////////////////////////////////////////////////////////////
// COMPONENT ////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

function NoResults(props) {

  return (
    <div className={props.noresults} >
      <div className="results_message">
      <BsX className="results_close m-2" data-prop="noresults" onClick={(i) =>  props.toggleDisplay(i)}/>
        <Row className="mt-3">
          <Col className="m-2 y-auto">
            <h3>{translate[0]["sorry"][props.language]}</h3>
            {translate[0]["no_results"][props.language]}
          </Col>
        </Row>
      </div>
    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
// EXPORT //////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

export default NoResults
