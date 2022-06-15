/**
 * TODO:
 * - [x] list of references of the paper
 * - [x] create a json file for the names
 */
import { Link } from "@mui/material";
import Structure from "../../components/Structure";
import referencesJson from "../../data/references";

const References = () => {
  return (
    <div>
      <Structure
        title="Referências"
        feedContent={
          <div>
            {referencesJson.map((value) => {
              return (
                <div key={value.id} style={{ marginBottom: 10 }}>
                  <span>{`[${value.id + 1}] `}</span>
                  <span>{value.authors} </span>
                  <span>
                    <strong>({value.year}) </strong>
                  </span>
                  <span>
                    <i>{value.title} </i>
                  </span>
                  <span>{value.journal} </span>
                  {value.volume && (
                    <span>{`${value.volume}:${value.pages}`} </span>
                  )}
                  <Link
                    component="button"
                    onClick={() => window.open(value.link)}
                    sx={{ textDecoration: "none" }}
                  >
                    {value.link}
                  </Link>
                </div>
              );
            })}
          </div>
        }
      />
    </div>
  );
};

export default References;
