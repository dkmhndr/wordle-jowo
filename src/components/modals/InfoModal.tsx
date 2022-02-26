import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Carane dolanan" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Koe ndue 6 kesempatan nggo mbethek sak ukara. Saben koe njajal mbethek
        werno nggon kotak bakal ngandani koe sepiro cedake bethekanmu karo ukara
        saktenane.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="correct"
        />
        <Cell value="I" />
        <Cell value="K" />
        <Cell value="I" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ukarane ana aksara S lan panggone wes bener.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="O" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Ukarane ana aksara L ning panggone isih kleru.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="A" />
        <Cell value="M" />
        <Cell isRevealing={true} isCompleted={true} value="B" status="absent" />
        <Cell value="U" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Aksara B ora ono ing ukara asline.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Digawe basa jawa dening{' '}
        <a href="https://instagram.com/dkmhndr" className="underline font-bold">
          Dika Mahendra,
        </a>{' '}
        <a
          href="https://instagram.com/kingkinfajarr"
          className="underline font-bold"
        >
          Kingkin Fajar,
        </a>{' '}
        lan{' '}
        <a
          href="https://instagram.com/adam_ibnu025"
          className="underline font-bold"
        >
          Adam Ibnu,
        </a>{' '}
      </p>
    </BaseModal>
  )
}
