/**
 * TODO:
 * - [x] list of people that contributed to the paper
 * - [x] card for each person with basic information
 * - fill information about each person
 * - put right links into each person's buttons
 */

import Structure from "../../components/Structure";
import PersonCard from "../../components/Card";

import photoDenner from "../../imgs/people/denner.jpg";
import photoRenio from "../../imgs/people/renio.jpg";
import photoRoger from "../../imgs/people/roger.jpg";

import { Grid } from "@mui/material";

const People = () => {
  return (
    <div>
      <Structure
        title="Pessoas"
        feedContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <PersonCard
                name="Mormul, R. P."
                imgPath={photoRoger}
                textInfo="Prof. Titular na UEM"
                scholarLink="https://scholar.google.com.br/citations?user=X-qo7OkAAAAJ&hl=en"
                labLink=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PersonCard
                name="Vieira, D. S."
                imgPath={photoDenner}
                textInfo="Prof. adjunto na UEM"
                scholarLink="https://scholar.google.com.br/citations?user=dQlVKPoAAAAJ&hl=en"
                labLink="http://complex.pfi.uem.br/dsvieira/"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PersonCard
                name="Bailly, D."
                imgPath=""
                textInfo="Prof. Titular na UEM"
                scholarLink=""
                labLink=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PersonCard
                name="Fidanza, K."
                imgPath=""
                textInfo="Prof. Titular na UEM"
                scholarLink=""
                labLink=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PersonCard
                name="da Silva, V. F. B."
                imgPath=""
                textInfo="Prof. Titular na UEM"
                scholarLink=""
                labLink=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PersonCard
                name="da Graça, W. J."
                imgPath=""
                textInfo="Prof. Titular na UEM"
                scholarLink=""
                labLink=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PersonCard
                name="Bueno, M. L."
                imgPath=""
                textInfo="Prof. Titular na UEM"
                scholarLink=""
                labLink=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <PersonCard
                name="Thomas, S. M."
                imgPath=""
                textInfo="Prof. Titular na UEM"
                scholarLink=""
                labLink=""
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
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
