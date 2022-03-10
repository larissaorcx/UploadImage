import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay>
        <ModalContent mr="auto" ml="auto" maxW={900} maxH={600}>
          <ModalBody bgColor="pGray.800" p="0">
            <Image src={imgUrl} alt="foto" maxW={900} maxH={600} />
          </ModalBody>
          <ModalFooter maxW={900} maxH={600} bgColor="pGray.800">
            <Link
              href={imgUrl}
              isExternal
              textDecoration="none"
              mr="auto"
              fontSize="14px"
            >
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
