import { useState } from 'react';
import CustomModal from '../components/CustomModal';

function useConfirm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [onConfirmAction, setOnConfirmAction] = useState(null);

    function confirm(action) {
        setIsModalOpen(true);
        setOnConfirmAction(() => action); 
    }

    function handleConfirm() {
        if (onConfirmAction) onConfirmAction();
        setIsModalOpen(false);
    }

    function handleClose() {
        setIsModalOpen(false);
    }

    const ConfirmModal = isModalOpen ? (
        <CustomModal isOpen={isModalOpen} onConfirm={handleConfirm} onClose={handleClose} />
    ) : null;

    return [confirm, ConfirmModal];
}

export default useConfirm;
