
import { Box, Stack } from "@mui/system";
import { motion,} from "framer-motion";

// Create components
export const MotionBox = motion.create(Box);

export const MotionStack = motion.create(Stack)

// Export default
export default { MotionBox, MotionStack };