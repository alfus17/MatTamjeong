import { Button, Typography } from "@mui/material";


export function CateButton({locations, fetchStoreByLocation, setPage}) {

    
    return (
        <>
            {locations.map((locations) => (
                <Button 
                key={locations}
                 color="primary"
                 onClick={()=>{ setPage(1); fetchStoreByLocation(locations,1)}}
                 >
                <Typography>
                {locations}
                </Typography>
                </Button>
            ))}
        </>
    );
}
