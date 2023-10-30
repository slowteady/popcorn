import { Button, Stack, styled } from '@mui/material';
import { memo } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { SUCCESS_CODE } from '../../../../api/code';
import paths from '../../../../config/routes/paths';
import { deleteCollection } from '../../../../service/collectionService';
import { customAlert, customConfirmAlert } from '../../../../utils/customAlert';
import { errorHandler } from '../../../../utils/exceptionHandler';
import Icon from '../../../common/icon/Icon';

const EDIT_ICON = 'eva:edit-fill';
const DELETE_ICON = 'eva:trash-2-fill';
const LIST_ICON = 'ph:list-fill';
const SUCCESS = 'success';
const DELETE_MESSAGE = '정말 삭제하시겠습니까?';
const SUCCESS_MESSAGE = '삭제가 완료됐어요';

const { main } = paths.main;
const { index, edit } = paths.main.collection;

interface DetailButtonProps {
  isOwner: boolean;
  collectionId: string;
}

const DetailButtons = ({ isOwner = false, collectionId: id }: DetailButtonProps) => {
  const navigate = useNavigate();

  const deleteMutation = useMutation(deleteCollection, {
    onSuccess: (response) => {
      const { data, status } = response;

      if (status === SUCCESS_CODE && data.isSuccess) {
        customAlert(SUCCESS_MESSAGE, SUCCESS);
        naviToList();
      }
    },
    onError: (error: Error) => {
      errorHandler(error);
    }
  });

  const doEdit = () => {
    navigate(`${main}${index}${edit}?id=${id}`);
  };

  const doDelete = async () => {
    const { isConfirmed } = await customConfirmAlert({ title: DELETE_MESSAGE, text: '' });
    if (isConfirmed) {
      deleteMutation.mutate(id);
    }
  };

  const naviToList = () => {
    navigate(`${main}${index}`);
  };

  const buttonArray = [
    { onClick: doEdit, icon: EDIT_ICON, label: 'Edit', color: 'primary', isOwner },
    { onClick: doDelete, icon: DELETE_ICON, label: 'Delete', color: '#c53126', isOwner },
    { onClick: naviToList, icon: LIST_ICON, label: 'List', color: '#3e4857' }
  ];

  return (
    <GroupStack>
      <Stack direction='row' spacing={1} flexShrink={0} sx={{ my: 1 }}>
        {buttonArray.map((button, idx) =>
          button.isOwner === undefined || button.isOwner ? (
            <Button
              key={idx}
              onClick={button.onClick}
              variant='contained'
              startIcon={<Icon icon={button.icon} />}
              sx={{ backgroundColor: button.color }}
            >
              {button.label}
            </Button>
          ) : null
        )}
      </Stack>
    </GroupStack>
  );
};

const GroupStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap-reverse',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(3)
}));

export default memo(DetailButtons);
