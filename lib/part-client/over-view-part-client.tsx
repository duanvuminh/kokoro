import * as React from 'react';
import Image from 'next/image'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ExpandMoreIcon, SvgPath } from 'lib/type';


export function OverViewPartClient({name, children}:{name: string, children: any}): JSX.Element{
    const id = name.charCodeAt(0).toString(16)
    const path = `${SvgPath}0${id}.svg`
    return(
      <Accordion>
        <AccordionSummary
          expandIcon={ExpandMoreIcon}>
          <Typography>Tóm tắt</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item>
            <Image src={path} alt={id} width='200' height='200'/>
            </Grid>
            <Grid item>
              {children}
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    )
}