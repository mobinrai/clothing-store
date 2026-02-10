import { LinearProgress, Stack, Typography } from "@mui/material";

const MyRatings = ({
    starNumber,
    progressValue,
    totalNumber,
    }: {
    starNumber: number;
    progressValue: number;
    totalNumber: number;
    }) => {
    return (
        <Stack direction={"row"} alignItems={"center"} gap={2}>
        <Typography variant="h6">{starNumber} star</Typography>
        <LinearProgress
            variant="determinate"
            sx={{
            backgroundColor: "#b1b1b1ff",
            "& .MuiLinearProgress-bar": { backgroundColor: "#272727ff" },
            width: "55%",
            }}
            value={progressValue}
        />
        <Typography variant="caption" style={{ color: "#818182ff" }}>
            {totalNumber}k
        </Typography>
        </Stack>
    );
};

export default MyRatings;
