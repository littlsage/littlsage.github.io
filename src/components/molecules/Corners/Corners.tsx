import { Corner } from "@app/components/atoms/Corner/Corner";

import { ICornersProps } from "@app/components/molecules/Corners/@types/Corners";
import { cornersPositions } from "@app/components/molecules/Corners/config";

const Corners: React.FC<ICornersProps> = ({ isActive = false, variant }) => (
  <>
    {cornersPositions.map(
      ({ position }): JSX.Element => (
        <Corner
          key={position}
          position={position}
          isActive={isActive}
          variant={variant}
        />
      ),
    )}
  </>
);

export { Corners };
