/* eslint-disable @next/next/no-img-element */
import { message, Popconfirm } from 'antd'
import { CloseCircleOutlined, DeleteTwoTone, FormOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { deleteMethod } from "../../helpers/methods";
import { useRouter } from 'next/router';
import { dispatch } from 'use-bus';

export default function TableAdmin({ data, map }) {
  const router = useRouter()

  function deleteProduct (id) {
    deleteMethod(id, () => {
      message.error({
        content: 'Produto removido',
        duration: 4,
        style: {
          marginTop: '30px'
        }
      })
      router.push('/refresh-page')
    })
  }

  function openModalUpdate(id) {
    data.filter((item) => {
      return item.id === id
    }).map(map)
    dispatch('showModalUpdate')
  }

  return(
    <table className="table table-striped table-inverse table-responsive">
      <thead className="thead-inverse">
        <tr>
          <th>Imagem</th> <th>Id</th> <th>Nome do produto</th> <th>Desconto (%)</th> <th>Preço</th> <th>Ações</th>
        </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return(
                <tr key={index}>
                  <td>
                    {
                      item.images.length > 0 ?
                      <img 
                        src={item.images[0].url}
                        style={{ 
                          height: '60px',
                          width: '60px',
                          objectFit: 'cover'
                        }}
                        height={100}
                        width={100}
                        alt={item.images[0].alt}
                      /> :
                      null
                    }
                  </td>
                  <td>#{ item.id }</td>
                  <td>{ item.name }</td>
                  <td>{ item.porcentagemDesconto }</td>
                  <td>{ item.preco }</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Popconfirm
                        icon={<CloseCircleOutlined  style={{ color: 'red' }} />}
                        title="Deseja excluir esse produto?"
                        placement="left"
                        onConfirm={() => deleteProduct(item.id)}
                        okText="Excluir"
                        cancelText="Cancelar"
                        onVisibleChange={() => console.log('visible change')}
                      >
                        <DeleteTwoTone style={{ fontSize: '24px' }} twoToneColor="red" />
                      </Popconfirm>
                      <Link href={{ pathname: 'products/view/[id]', query: { id: item.id} }}>
                        <a style={{ marginLeft: '10px', marginRight: '10px' }} >
                          <ion-icon style={{ fontSize: '26px', marginBottom: '-5px' }} name="open-outline"></ion-icon>
                        </a>
                      </Link>
                      <button onClick={() => { openModalUpdate(item.id) }}>
                        <FormOutlined style={{ fontSize: '22px' }} />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
    </table>
  )
}