import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { School, Science } from "@mui/icons-material/";

import { Link as LinkRD } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const PersonCard = ({
  name,
  imgPath,
  textInfo,
  scholarLink,
  labLink,
  goToPageLink,
}) => {
  return (
    <div>
      <Card sx={{ marginTop: 2, marginRight: 4 }}>
        <CardMedia
          component="img"
          image={imgPath}
          alt={`photo-${name}`}
          sx={{ objectFit: "center", maxHeight: 300 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {textInfo}
          </Typography>
        </CardContent>
        <CardActions>
          {scholarLink && (
            <>
              <Button size="small">
                <Link
                  component="button"
                  onClick={() => window.open(scholarLink)}
                >
                  <School />
                </Link>
              </Button>
            </>
          )}
          {labLink && (
            <>
              <Button size="small">
                <Link component="button" onClick={() => window.open(labLink)}>
                  <Science />
                </Link>
              </Button>
            </>
          )}
          {goToPageLink && (
            <>
              <Button
                component={LinkRD}
                to={`/alien-species-page/groups/${goToPageLink}`}
                size="small"
              >
                {
                  <FormattedMessage
                    id="card.seeMore"
                    default="Veja mais"
                  ></FormattedMessage>
                }
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default PersonCard;
