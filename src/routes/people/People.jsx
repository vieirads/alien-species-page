/**
 * TODO:
 * - [x] list of people that contributed to the paper
 * - [x] card for each person with basic information
 * - [x] fix vertical size of cards
 * - fill information about each person
 * - put right links into each person's buttons
 */

import Structure from "../../components/Structure";
import PersonCard from "../../components/Card";

import photoRoger from "../../imgs/people/roger.jpg";
import photoDenner from "../../imgs/people/denner.jpg";
import photoDayani from "../../imgs/people/dayani.jpeg";
import photoWeferson from "../../imgs/people/weferson.jpg";
import photoKarina from "../../imgs/people/karina.png";
import photoValeria from "../../imgs/people/valeria.jpg";
import photoSidinei from "../../imgs/people/sidinei.gif";
import photoRenio from "../../imgs/people/renio.jpg";
import photoAvatar from "../../imgs/people/avatar.png";

import { Grid } from "@mui/material";
import { FormattedMessage } from "react-intl";

const People = () => {
  return (
    <div>
      <Structure
        title={
          <FormattedMessage
            id="people.title"
            default="Pessoas"
          ></FormattedMessage>
        }
        feedContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <PersonCard
                name="Mormul, R. P."
                imgPath={photoRoger}
                textInfo="Prof. Titular na UEM"
                scholarLink="https://scholar.google.com.br/citations?user=X-qo7OkAAAAJ&hl=en"
                labLink="https://leslin.nupelia.uem.br/"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <PersonCard
                name="Vieira, D. S."
                imgPath={photoDenner}
                textInfo="Prof. adjunto na UEM"
                scholarLink="https://scholar.google.com.br/citations?user=dQlVKPoAAAAJ&hl=en"
                labLink="http://complex.pfi.uem.br/dsvieira/"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <PersonCard
                name="Bailly, D."
                imgPath={photoDayani}
                textInfo="Prof. Titular na UEM"
                scholarLink="https://scholar.google.com.br/citations?user=ueQDPLIAAAAJ&hl=pt-BR"
                labLink=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <PersonCard
                name="Fidanza, K."
                imgPath={photoKarina}
                textInfo="Prof. Titular na UEM"
                scholarLink=""
                labLink="http://www.cpr.uem.br/pite/index.php/infraestrutura-tecnologica/laboratorios/2445-laboratorio-de-sistematica-e-de-biogeografia-de-plantas"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <PersonCard
                name="da Silva, V. F. B."
                imgPath={photoValeria}
                textInfo="Prof. Titular na UEM"
                scholarLink="https://scholar.google.com.br/citations?user=QsaFdPwAAAAJ&hl=pt-BR&oi=ao"
                labLink="http://www.uems.br/lamev"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <PersonCard
                name="da Graça, W. J."
                imgPath={photoWeferson}
                textInfo="Prof. Titular na UEM"
                scholarLink="https://scholar.google.com.br/citations?user=GNJ8XGQAAAAJ&hl=pt-BR"
                labLink="https://www.nupelia.uem.br/colecao-ictiologica-nupelia"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <PersonCard
                name="Bueno, M. L."
                imgPath={photoAvatar}
                textInfo="Prof. Titular na UEM"
                scholarLink=""
                labLink=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <PersonCard
                name="Thomas, S. M."
                imgPath={photoSidinei}
                textInfo="Prof. Titular na UEM"
                scholarLink="https://scholar.google.com.br/citations?user=eQ2PtBwAAAAJ&hl=pt-BR"
                labLink="https://www.nupelia.uem.br/laborat%C3%B3rios/macr%C3%B3fitas-aquaticas"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <PersonCard
                name="Mendes, R. S."
                imgPath={photoRenio}
                textInfo="Prof. Titular na UEM"
                scholarLink="https://scholar.google.com.br/citations?user=_m6zmiYAAAAJ&hl=pt-BR"
                labLink="http://complex.pfi.uem.br/rsmendes/"
              />
            </Grid>
          </Grid>
        }
      />
    </div>
  );
};

export default People;
