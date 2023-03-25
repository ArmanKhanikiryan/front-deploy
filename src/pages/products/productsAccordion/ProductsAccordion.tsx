import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import "./ProductsAccordion.css";
import { FC, memo, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

type TProductsAccordionProps = {
  navigationParameter: string | null;
};

type TClicked = {
  elem: boolean;
};

type NavigationParamToPanelMap = {
  [key: string]: string | boolean;
};

const navigationParamToPanelMap: NavigationParamToPanelMap = {
  aluminium: "panel1",
  "metal-plastic": "panel2",
  glass: "panel3",
  "glass-shower": "panel3",
  blinds: false,
  automatic: false,
  facade: false,
  termo: "panel5",
};

const ProductsAccordion: FC<TProductsAccordionProps> = ({
  navigationParameter,
}) => {
  const [clicked, setClicked] = useState<TClicked[]>([
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
    { elem: false },
  ]);

  const resetClicked = () => {
    setClicked((prevState) =>
      prevState.map((value) => ({ ...value, elem: false }))
    );
  };
  const toggleClicked = (needIndex: number) => {
    setClicked((prevState) =>
      prevState.map((value, index) => {
        value.elem = index === needIndex;
        return value;
      })
    );
  };
  let initialState = navigationParameter
    ? navigationParamToPanelMap[navigationParameter] ?? false
    : false;
  const [expanded, setExpanded] = React.useState<string | boolean>(
    initialState
  );
  const initialTermo = navigationParameter === "termo";
  const [expandedTermo, setExpandedTermo] = useState<boolean>(initialTermo);

  const handleTermoChange = () => {
    setExpandedTermo(!expandedTermo);
  };
  useEffect(() => {
    if (navigationParameter === "all-alumin") {
      setExpanded("panel1");
      setExpandedTermo(true);
    } else if (navigationParameter === "termo-slide") {
      setExpanded("panel1");
      setExpandedTermo(true);
      toggleClicked(3);
    } else if (navigationParameter === "termo-doors") {
      setExpanded("panel1");
      setExpandedTermo(true);
      toggleClicked(4);
    } else if (navigationParameter === "termo-windows") {
      setExpanded("panel1");
      setExpandedTermo(true);
      toggleClicked(5);
    } else if (navigationParameter === "aluminium") {
      setExpanded("panel1");
      setExpandedTermo(false);
      resetClicked();
    } else if (navigationParameter === "termo") {
      setExpanded("panel1");
      resetClicked()
    } else if (navigationParameter === "metal-plastic") {
      setExpanded("panel2");
      resetClicked();
    } else if (navigationParameter === "glass") {
      setExpanded("panel3");
      resetClicked();
    } else if (navigationParameter === "handrails") {
      setExpanded("panel4");
      resetClicked();
    } else if (navigationParameter === "facade") {
      toggleClicked(14);
      setExpanded(false);
    } else if (navigationParameter === "blinds") {
      toggleClicked(13);
      setExpanded(false);
    } else if (navigationParameter === "automatic") {
      toggleClicked(12);
      setExpanded(false);
    } else if (navigationParameter === "glass-shower") {
      toggleClicked(8);
      setExpanded("panel3");
    } else if (navigationParameter === "door-pvc") {
      setExpanded("panel2");
      toggleClicked(6);
    } else if (navigationParameter === "window-pvc") {
      setExpanded("panel2");
      toggleClicked(7);
    } else if (navigationParameter === "slide") {
      setExpanded("panel1");
      toggleClicked(2);
    } else if (navigationParameter === "doors") {
      setExpanded("panel1");
      toggleClicked(0);
    } else if (navigationParameter === "windows") {
      setExpanded("panel1");
      toggleClicked(1);
    } else if (navigationParameter === "glass-inner") toggleClicked(9);
    else if (navigationParameter === "glass-hand") {
      setExpanded("panel4");
      toggleClicked(10);
    } else if (navigationParameter === "alumin-hand") {
      setExpanded("panel4");
      toggleClicked(11);
    }
  }, [navigationParameter]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="product_accordion_wrapper">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          onClick={() => navigate("/products", { state: "aluminium" })}
          id="panel1d-header"
        >
          <Typography>{t("Aluminium Profiles")}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ paddingLeft: "50px" }}
          onClick={() => navigate("/products", { state: "doors" })}
          className={
            clicked[0].elem
              ? "product_accordion_inner_element_clicked"
              : "product_accordion_inner_element"
          }
        >
          <Typography>{t("Doors")}</Typography>
        </AccordionDetails>
        <AccordionDetails
          sx={{ paddingLeft: "50px" }}
          onClick={() => navigate("/products", { state: "windows" })}
          className={
            clicked[1].elem
              ? "product_accordion_inner_element_clicked"
              : "product_accordion_inner_element"
          }
        >
          <Typography>{t("Windows")}</Typography>
        </AccordionDetails>
        <AccordionDetails
          sx={{ paddingLeft: "50px" }}
          onClick={() => navigate("/products", { state: "slide" })}
          className={
            clicked[2].elem
              ? "product_accordion_inner_element_clicked"
              : "product_accordion_inner_element"
          }
        >
          <Typography> {t("Slides")}</Typography>
        </AccordionDetails>
        <Accordion
          expanded={expandedTermo}
          onChange={handleTermoChange}
          sx={{ border: "none" }}
        >
          {/*TERMO PART ??????*/}

          <AccordionSummary
            onClick={() => navigate("/products", { state: "termo" })}
            sx={{
              paddingLeft: "50px",
              background: "none",
              borderTop: "1px solid lightgrey",
            }}
          >
            <Typography> {t("Termo Aluminium Profile")}</Typography>
          </AccordionSummary>
          <AccordionDetails
            onClick={() => navigate("/products", { state: "termo-slide" })}
            sx={{ paddingLeft: "85px" }}
            className={
              clicked[3].elem
                ? "product_accordion_inner_element_clicked"
                : "product_accordion_inner_element"
            }
          >
            <Typography>{t("Termo Slides")}</Typography>
          </AccordionDetails>
          <AccordionDetails
            sx={{ paddingLeft: "85px" }}
            onClick={() => navigate("/products", { state: "termo-doors" })}
            className={
              clicked[4].elem
                ? "product_accordion_inner_element_clicked"
                : "product_accordion_inner_element"
            }
          >
            <Typography>{t("Termo Doors")}</Typography>
          </AccordionDetails>
          <AccordionDetails
            sx={{ paddingLeft: "85px" }}
            onClick={() => navigate("/products", { state: "termo-windows" })}
            className={
              clicked[5].elem
                ? "product_accordion_inner_element_clicked"
                : "product_accordion_inner_element"
            }
          >
            <Typography>{t("Termo Windows")}</Typography>
          </AccordionDetails>
        </Accordion>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          onClick={() => navigate("/products", { state: "metal-plastic" })}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>{t("Metal-Plastic")}</Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{ paddingLeft: "50px" }}
          onClick={() => navigate("/products", { state: "door-pvc" })}
          className={
            clicked[6].elem
              ? "product_accordion_inner_element_clicked"
              : "product_accordion_inner_element"
          }
        >
          <Typography>{t("Doors")} UPVC</Typography>
        </AccordionDetails>

        <AccordionDetails
          sx={{ paddingLeft: "50px" }}
          onClick={() => navigate("/products", { state: "window-pvc" })}
          className={
            clicked[7].elem
              ? "product_accordion_inner_element_clicked"
              : "product_accordion_inner_element"
          }
        >
          <Typography>{t("Windows")} UPVC</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          onClick={() => navigate("/products", { state: "glass" })}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>{t("Glass Constructions")}</Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{ paddingLeft: "50px" }}
          onClick={() => navigate("/products", { state: "glass-shower" })}
          className={
            clicked[8].elem
              ? "product_accordion_inner_element_clicked"
              : "product_accordion_inner_element"
          }
        >
          <Typography>{t("Shower Enclosures")}</Typography>
        </AccordionDetails>

        <AccordionDetails
          sx={{ paddingLeft: "50px" }}
          onClick={() => navigate("/products", { state: "glass-inner" })}
          className={
            clicked[9].elem
              ? "product_accordion_inner_element_clicked"
              : "product_accordion_inner_element"
          }
        >
          <Typography>{t("Inner-room Glass Partitions")}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          onClick={() => navigate("/products", { state: "handrails" })}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>{t("Handrails")}</Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{ paddingLeft: "50px" }}
          onClick={() => navigate("/products", { state: "glass-hand" })}
          className={
            clicked[10].elem
              ? "product_accordion_inner_element_clicked"
              : "product_accordion_inner_element"
          }
        >
          <Typography>{t("Glass Handrail")}</Typography>
        </AccordionDetails>

        <AccordionDetails
          sx={{ paddingLeft: "50px" }}
          onClick={() => navigate("/products", { state: "alumin-hand" })}
          className={
            clicked[11].elem
              ? "product_accordion_inner_element_clicked"
              : "product_accordion_inner_element"
          }
        >
          <Typography>{t("Aluminium Handrail")}</Typography>
        </AccordionDetails>
      </Accordion>

      <AccordionDetails
        sx={{ paddingLeft: "20px" }}
        onClick={() => navigate("/products", { state: "automatic" })}
        className={
          clicked[12].elem
            ? "product_accordion_inner_element_clicked"
            : "product_accordion_single"
        }
      >
        <Typography>{t("Automatic Sliding Door")}</Typography>
      </AccordionDetails>

      <AccordionDetails
        sx={{ paddingLeft: "20px" }}
        onClick={() => navigate("/products", { state: "blinds" })}
        className={
          clicked[13].elem
            ? "product_accordion_inner_element_clicked"
            : "product_accordion_single"
        }
      >
        <Typography>{t("Remote Controlled Blinds")}</Typography>
      </AccordionDetails>

      <AccordionDetails
        sx={{ paddingLeft: "20px", borderBottom: "1px solid lightgrey" }}
        onClick={() => navigate("/products", { state: "facade" })}
        className={
          clicked[14].elem
            ? "product_accordion_inner_element_clicked"
            : "product_accordion_single"
        }
      >
        <Typography>{t("Facade Constructions")}</Typography>
      </AccordionDetails>
    </div>
  );
};

export default memo(ProductsAccordion);
