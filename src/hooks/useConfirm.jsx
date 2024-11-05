import { useState, useCallback } from 'react';
import CustomModal from '../components/CustomModal';

function useConfirm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [onConfirmAction, setOnConfirmAction] = useState(null);

    // Trigger the modal and set the callback to the desired action
    const confirm = useCallback((action) => {
        setIsModalOpen(true);
        setOnConfirmAction(() => action);
    }, []);

    const handleConfirm = useCallback(() => {
        if (onConfirmAction) onConfirmAction();
        setIsModalOpen(false);
    }, [onConfirmAction]);

    const handleClose = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const ConfirmModal = isModalOpen ? (
        <CustomModal isOpen={isModalOpen} onConfirm={handleConfirm} onClose={handleClose} />
    ) : null;

    return [confirm, ConfirmModal];
}

export default useConfirm;
