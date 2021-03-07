import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { Typography, Button, CardContent, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export default function Footnote(){
    const [pronoun, setPronoun] = useState(10);
    const [text, setText] = useState("");
    const handleChange = (e) =>{
        setPronoun(e.target.value);
        switch (e.target.value) {
            case 10: setText("Xe is a popular gender neutral pronoun commonly used by non-binary or trans people"); 
                break;
            case 20: setText("Ze is a popular gender neutral pronoun commonly used by non-binary or trans people"); 
                break;
            case 30: setText("Ey is a popular gender neutral pronoun commonly used by non-binary"); 
                break;
            case 40: setText("Hir is a popular gender neutral pronoun commonly used by non-binary or trans people"); 
              break;
            case 50: setText("Hir is a less common gender neutral pronoun commonly used by non-binary or trans people"); 
              break;
            case 60: setText("Hu is a less common gender neutral pronoun commonly used by non-binary or trans people"); 
              break;
            case 70: setText("They is the most common gender neutral pronoun commonly used by non-binary or trans people"); 
              break;
            case 80: setText("He is a pronoun commonly used by male identified people, sometimes also by non-binary people"); 
              break;
            case 90: setText("She is a pronoun commonly used by female identified people, sometimes also by non-binary people"); 
              break;
            default: setText("Let us learn about pronouns");
                break;
        }
    }
    
    return( 
    <Card className="foot">
        <CardContent>
            Learn about Pronouns
            <br></br>
            <InputLabel id="demo-simple-select-label">Pick a Pronoun:</InputLabel>
            <br></br>
            <FormControl>
        <Select style={{width:"100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pronoun}
          onChange={handleChange}
        >
          <MenuItem value={10}>Xe</MenuItem>
          <MenuItem value={20}>Ze</MenuItem>
          <MenuItem value={30}>Ey</MenuItem>
          <MenuItem value={40}>Hir</MenuItem>
          <MenuItem value={50}>Fae</MenuItem>
          <MenuItem value={60}>Hu</MenuItem>
          <MenuItem value={70}>They</MenuItem>
          <MenuItem value={80}>He</MenuItem>
          <MenuItem value={90}>She</MenuItem>
        </Select>
        
      </FormControl>
      <br></br>
      {text}
        </CardContent>
    </Card>);
}